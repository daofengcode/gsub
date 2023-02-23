import { http } from "../utils/http"

export const getPost = async (id: any) => {
    const url = `/posts/${id}`
    return await http.get(url)
}