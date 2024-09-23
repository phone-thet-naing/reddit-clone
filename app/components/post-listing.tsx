import * as data from '../../data/data.json'

const PostListing = () => {
    const { posts } = data

    return (
        <section className="flex flex-col gap-2 overflow-x-hidden  overflow-y-hidden w-[900px] h-[900px] scroll-smooth  border-l border-r">
            {posts.map(({ title, post, summary }, idx) => (
                <Post key={idx} title={title} post={post} summary={summary} />
            ))}
        </section>
    )
}

const Post = ({ title, summary, post }: { title: string, summary: string, post: string }) => {
    return (
        <div className="block w-full p-6 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">{post}</p>

        </div>
    )
}

export default PostListing