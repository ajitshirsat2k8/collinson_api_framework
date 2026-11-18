import { z } from "zod";

export const ActivityRankingRequestSchema =
  z.object({
    location: z
      .string({
        required_error:
          "location is required"
      })
      .trim()
      .min(
        2,
        "location must contain at least 2 characters"
      )
      .max(
        100,
        "location exceeds maximum length"
      )
  });

export type ActivityRankingRequest =
  z.infer<
    typeof ActivityRankingRequestSchema
  >;