export type Users = {
    id: string,
    name: string,
    username: string,
    image?: string,
}

export type TweetType = {
    id: string,
    user: Users,
    name: string,
    createdAt: string,
    content: string,
    image?: string,
    numberOfComments?:number,
    numberOfRetweets?: number,
    numberOfLikes?: number,
    impressions?: number,
}