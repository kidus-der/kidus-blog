import { compareDesc, parseISO } from "date-fns";

// helper function to conditionally join class names
export const cx = (...className) => className.filter(Boolean).join(" ");

// helper function to sort blogs by publishedAt date
export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
