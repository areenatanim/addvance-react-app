const blogs = [
    {
        id: 1,
        title: "Getting Started with React Hooks",
        author: "Sarah Mitchell",
        date: "2026-03-12",
        category: "React",
        image: "https://example.com/images/react-hooks.jpg",
        excerpt: "A beginner-friendly guide to understanding useState, useEffect, and custom hooks in modern React applications.",
        content: "React Hooks revolutionized how we write components by letting us use state and lifecycle features without writing classes. In this post, we'll walk through useState for managing local state, useEffect for handling side effects, and how to build your own custom hooks for reusable logic.",
        readTime: 6,
        likes: 142,
        tags: ["react", "hooks", "javascript"]
    },
    {
        id: 2,
        title: "Mastering CSS Grid Layout",
        author: "James Okafor",
        date: "2026-04-02",
        category: "CSS",
        image: "https://example.com/images/css-grid.jpg",
        excerpt: "Learn how CSS Grid can simplify complex layouts and replace many use cases for older techniques like floats and flexbox.",
        content: "CSS Grid gives developers a two-dimensional layout system, perfect for designing complex web pages without relying on hacks. This article covers grid-template-columns, grid-template-areas, and responsive grid patterns you can use right away.",
        readTime: 8,
        likes: 98,
        tags: ["css", "layout", "web-design"]
    },
    {
        id: 3,
        title: "Understanding Node.js Event Loop",
        author: "Priya Sharma",
        date: "2026-02-18",
        category: "Node.js",
        image: "https://example.com/images/event-loop.jpg",
        excerpt: "A deep dive into how Node.js handles asynchronous operations behind the scenes using the event loop.",
        content: "Node.js is single-threaded, yet it handles thousands of concurrent connections efficiently. The secret lies in the event loop, which manages callbacks, timers, and I/O operations. This post breaks down each phase of the event loop with practical examples.",
        readTime: 10,
        likes: 211,
        tags: ["nodejs", "javascript", "backend"]
    },
    {
        id: 4,
        title: "Building Accessible Web Forms",
        author: "Daniel Kim",
        date: "2026-05-09",
        category: "Accessibility",
        image: "https://example.com/images/accessible-forms.jpg",
        excerpt: "Practical tips for making your web forms usable for everyone, including people relying on screen readers and keyboard navigation.",
        content: "Accessible forms aren't just good practice, they're essential for inclusive design. We'll cover proper label associations, ARIA attributes, focus management, and error messaging patterns that work well across assistive technologies.",
        readTime: 7,
        likes: 76,
        tags: ["accessibility", "forms", "html"]
    }
];
const BlogsDetails = async ({ params }) => {

    const { blogsId } = await params;
    console.log(typeof blogsId);

    const blog = blogs.find((blog) => blog.id === parseInt(blogsId));

    console.log("details from blog id", blog);

    return (
        <div>
            <h2 className="font-bold text-2xl">Your in the Blogs Details Pages</h2>
            {blog && <div>
                <h2 className="text-2xl">{blog.title}</h2>
                <p className="text-sky-300">{blog.content}</p>
            </div>}
        </div>
    );
};

export default BlogsDetails;