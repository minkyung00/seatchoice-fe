import { AxiosResponse, AxiosError } from "axios";
import {
  UseMutationOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import { api } from "@/api";
import { QUERY_KEYS } from "@/constants/queryKey";
import { useToast } from "@/hooks/useToast";

const createReviewLike = (reviewId: string): Promise<AxiosResponse> => {
  return api.post(`/likes?reviewId=${reviewId}`);
};

export const useCreateReviewLikeMutation = (
  reviewId: string,
  options?: UseMutationOptions<AxiosResponse, AxiosError, string>
) => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  return useMutation(() => createReviewLike(reviewId), {
    ...options,
    onSuccess: () => {
      toast({ type: "success", content: "좋아요 목록에 추가되었습니다" });
      queryClient.invalidateQueries([QUERY_KEYS.REVIEW, reviewId]);
    },
  });
};
