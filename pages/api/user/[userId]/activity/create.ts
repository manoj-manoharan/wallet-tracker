// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {ApiResponse} from "@/types/response";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse<[]>>
) {
    res.status(200).json({
        data: [],
        error: {code: 0, message: ""},
        message: "",
        success: true
    })
}
