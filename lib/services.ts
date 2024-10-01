const API_KEY = 'e0deba48cb1f5b45bf921dc3d49eda6d';
const BASE_URL = 'https://libraries.io/api';

type LibrariesAPIResponse = {
  name: string;
  stars: number;
  repository_url: string;
}

export type Module = {
  name: string;
  stars: number;
  owner: string;
}

export const getModules = async (page: number, searchQuery: string = ''): Promise<Module[]> => {
  try {
    const response = await fetch(`${BASE_URL}/search?api_key=${API_KEY}&q=${searchQuery}&per_page=5&page=${page}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data: LibrariesAPIResponse[] = await response.json();

    return data.map((mod) => ({
      name: mod.name,
      owner: mod.repository_url.split('/')[3],  
      stars: mod.stars || 0,
    }));
  } catch (error) {
    return [];
  }
};