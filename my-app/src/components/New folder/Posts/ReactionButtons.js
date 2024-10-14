import { useDispatch } from "react-redux";
import { reactionAdded } from "./posts.slice";

const reactionEmojis = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

function ReactionButtons({ post }) {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {Object.entries(reactionEmojis).map(([name, emoji]) => (
        <button
          key={name}
          type="button"
          className="reactionButton"
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(reactionAdded({ postId: post.id, reaction: name }));
          }}
        >
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
}

export default ReactionButtons;
