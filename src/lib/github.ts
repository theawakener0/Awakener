export interface PinnedRepo {
  name: string;
  description: string;
  url: string;
  primaryLanguage: string | null;
  stargazerCount: number;
}

// Fetch pinned repositories from GitHub GraphQL API
export async function getPinnedRepos(username: string): Promise<PinnedRepo[]> {
  const token = import.meta.env.GITHUB_TOKEN;
  
  if (!token) {
    console.warn('GITHUB_TOKEN not set, returning empty projects');
    return [];
  }

  const query = `
    query {
      user(login: "${username}") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              primaryLanguage {
                name
              }
              stargazerCount
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('GitHub GraphQL errors:', data.errors);
      return [];
    }

    const repos = data.data?.user?.pinnedItems?.nodes || [];
    
    return repos.map((repo: any) => ({
      name: repo.name,
      description: repo.description || 'No description available',
      url: repo.url,
      primaryLanguage: repo.primaryLanguage?.name || null,
      stargazerCount: repo.stargazerCount,
    }));
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    return [];
  }
}

// Fallback data for development/demo
export function getFallbackRepos(): PinnedRepo[] {
  return [
    {
      name: 'awakener',
      description: 'High-performance minimalist portfolio built with Astro',
      url: 'https://github.com/theawakener0/awakener',
      primaryLanguage: 'TypeScript',
      stargazerCount: 0,
    },
  ];
}
