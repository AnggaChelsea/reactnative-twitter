export type Users = {
    id: string,
    name: string,
    username: string,
    image?: string | undefined,
}

export type TweetType = {
    id: string,
    user: Users,
    name: string,
    createdAt: string,
    content: string,
    image?: string | undefined,
    numberOfComments?:number,
    numberOfRetweets?: number,
    numberOfLikes?: number,
    impressions?: number,
}