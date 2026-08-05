export interface PinnedRepo {
  name: string;
  description: string;
  url: string;
  primaryLanguage: string | null;
  stargazerCount: number;
}

// Fetch pinned repositories from GitHub GraphQL API (requires token)
async function fetchPinnedRepos(username: string, token: string): Promise<PinnedRepo[]> {
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
    throw new Error(`GitHub GraphQL errors: ${JSON.stringify(data.errors)}`);
  }

  const repos = data.data?.user?.pinnedItems?.nodes || [];

  return repos.map((repo: any) => ({
    name: repo.name,
    description: repo.description || 'No description available',
    url: repo.url,
    primaryLanguage: repo.primaryLanguage?.name || null,
    stargazerCount: repo.stargazerCount,
  }));
}

// Fetch recent public repos via unauthenticated REST API (no token required)
async function fetchPublicRepos(username: string): Promise<PinnedRepo[]> {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
    {
      headers: {
        'Accept': 'application/vnd.github+json',
      },
    }
  );

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const repos = await response.json();

  return repos
    .filter((repo: any) => !repo.fork && repo.name.toLowerCase() !== username.toLowerCase())
    .map((repo: any) => ({
      name: repo.name,
      description: repo.description || 'No description available',
      url: repo.html_url,
      primaryLanguage: repo.language || null,
      stargazerCount: repo.stargazers_count,
    }));
}

export async function getPinnedRepos(username: string): Promise<PinnedRepo[]> {
  const token = import.meta.env.GITHUB_TOKEN as string | undefined;

  if (token) {
    try {
      const pinned = await fetchPinnedRepos(username, token);
      if (pinned.length > 0) return pinned;
    } catch (error) {
      console.error('Failed to fetch pinned repos:', error);
    }
  }

  try {
    const repos = await fetchPublicRepos(username);
    if (repos.length > 0) return repos;
  } catch (error) {
    console.error('Failed to fetch public repos:', error);
  }

  return [];
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
