import { Request, Response } from 'express';
import { getPlacesByName } from "./GeocoderController";
import { checkSearchParams } from "../../middleware/checks";


export default [
    {
        path: '/',
        method: 'get',
        handler: async (req: Request, res: Response) => {
            res.send("Hello World");
        }
    },
    {
        path: "/api/v1/geocode",
        method: "get",
        handler: [
            checkSearchParams,
            async ({ query }: Request, res: Response) => {
                const result = await getPlacesByName(query.q);
                res.status(200).send(result);
            }
        ]
    }

]