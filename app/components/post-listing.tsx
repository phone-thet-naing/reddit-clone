const Posts = [
    { title: 'Post header', body: "The first blog post I've written on my blogging software!" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
    { title: 'Second Post on Reddit Clone', body: "I like Parata and Coffe. What's your favorite breakfast?" },
]

const PostListing = () => {
    return (
        <section className="flex flex-col gap-2 overflow-x-hidden overflow-y-auto h-96 scroll-smooth">
            {Posts.map(({ title, body }, idx) => (
                <Post key={idx} title={title} body={body} />
            ))}
        </section>
    )
}

const Post = ({ title, body }: { title: string, body: string }) => {
    return (
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ title }</h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">{ body }</p>

        </div>
    )
}

export default PostListing