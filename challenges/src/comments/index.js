import React, { useState } from "react";

const Comment = ({ comment, onReply }) => {
  const [replying, setReplying] = useState(false);
  const [replyText, setReplyText] = useState("");

  const handleReply = () => {
    if (replyText.trim()) {
      onReply(comment.id, replyText.trim());
      setReplying(false);
      setReplyText("");
    }
  };

  return (
    <div className="ml-4 mt-2 border-l pl-4">
      <p><strong>{comment.author}</strong>: {comment.text}</p>

      <button onClick={() => setReplying(!replying)} className="text-blue-600 text-sm">
        {replying ? "Cancel" : "Reply"}
      </button>

      {replying && (
        <div className="mt-2">
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            className="border p-1 mr-2"
          />
          <button onClick={handleReply} className="bg-blue-500 text-white px-2 py-1 rounded">
            Reply
          </button>
        </div>
      )}

      <div className="mt-2">
        {comment.replies.map((reply) => (
          <Comment key={reply.id} comment={reply} onReply={onReply} />
        ))}
      </div>
    </div>
  );
};

// Top-level component
const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const addComment = () => {
    if (text.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          author: "User",
          text: text.trim(),
          replies: [],
        },
      ]);
      setText("");
    }
  };

  const handleReply = (id, replyText) => {
    const addReplyRecursively = (commentList) =>
      commentList.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            replies: [
              ...comment.replies,
              {
                id: Date.now() + Math.random(),
                author: "User",
                text: replyText,
                replies: [],
              },
            ],
          };
        }
        return {
          ...comment,
          replies: addReplyRecursively(comment.replies),
        };
      });

    setComments((prev) => addReplyRecursively(prev));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Comment Section</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 w-full mb-2"
        />
        <button onClick={addComment} className="bg-green-600 text-white px-4 py-2 rounded">
          Add Comment
        </button>
      </div>

      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} onReply={handleReply} />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
