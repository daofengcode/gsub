import { useQuery } from "react-query"
import { getPost } from "../api/post.api"


export const usePost = (id: any) => {
    return useQuery<any, Error>(
        ["post", { id }],
        () => getPost(id!),
        // { enabled: !!id } // 如果 id 为 undefined，不执行请求操作
    )
}