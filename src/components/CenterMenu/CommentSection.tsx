import prisma from "@/libs/prisma";
import CommentList from "./CommentList";

interface Props {
  userId: string;
  postId: number;
}

const CommentSection = async (props: Props) => {
  const { userId, postId } = props;
  const availableUser = await prisma.user.findFirst({ where: { id: userId } });

  const comments = await prisma.comment.findMany({
    where: { postId },
    include: { user: true, _count: { select: { likes: true } } },
  });

  return (
    <CommentList
      availableUser={availableUser!}
      comments={comments!}
      postId={postId}
    />
  );
};

export default CommentSection;
