import { useRouter } from "next/router";

import { Text, Divider, BackButton } from "@/components";
import { ReviewForm } from "@/domain/review/components";

export default function ReviewPost() {
  const {
    query: { theater },
  } = useRouter();

  return (
    <>
      <header className="flex items-center py-2">
        <BackButton />
        <Text as="h3">리뷰 작성하기</Text>
      </header>
      <Divider className="my-2" />
      <Text as="h4" className="mb-2">
        {theater}
      </Text>
      <ReviewForm />
    </>
  );
}
