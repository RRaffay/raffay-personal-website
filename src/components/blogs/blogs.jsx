import * as React from "react";

class Blog {
  constructor(title, content) {
    this.title = title;
    this.content = content;
    const current = new Date();
    const date = `${current.getDate()}/${
      current.getMonth() + 1
    }/${current.getFullYear()}`;
    this.date = date;
  }
}
const blog1 = new Blog("Blog 1", "This is the first blog post");

const blogs = [blog1];

export default blogs;
