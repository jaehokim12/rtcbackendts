// interface User {
//     user?: any | null;
// }

declare namespace Express {
    export interface Request {
        user: any;
    }
    export interface Response {
        user: any;
    }
}
