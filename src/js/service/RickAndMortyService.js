import { getContent } from "../api/getContent";
import { CHARACTERS_ENDPOINT, EPISODES_ENDPOINT } from "../http/http";

export class RickAndMortyService {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  static async getAllCharacters(params) {
    return await getContent(CHARACTERS_ENDPOINT, params);
  }

  static async getCharacterById(id) {
    return await getContent(`${CHARACTERS_ENDPOINT}/${id}`);
  }

  static async getAllEpisodes(params) {
    return await getContent(EPISODES_ENDPOINT, params);
  }

  static async getAllEpisodeById(id) {
    return await getContent(`${EPISODES_ENDPOINT}/${id}`);
  }
}
