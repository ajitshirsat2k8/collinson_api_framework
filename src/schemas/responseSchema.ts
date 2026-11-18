import { z } from "zod";

const RankingSchema = z.object({

  date: z
    .string()
    .regex(
      /^\d{4}-\d{2}-\d{2}$/,
      "Invalid date format"
    ),

  activityName: z.enum([
    "Skiing",
    "Surfing",
    "Outdoor Sightseeing",
    "Indoor Sightseeing"
  ]),

  suitability: z.enum([
    "High",
    "Medium",
    "Low"
  ]),

  reasoning: z
    .string()
    .min(5)
});

export const ActivityRankingResponseSchema =
  z.object({

    city: z
      .string()
      .min(1),

    forecastDays: z
      .number()
      .int()
      .positive(),

    rankings: z.array(
      RankingSchema
    )
  });

export type ActivityRankingResponse =
  z.infer<
    typeof ActivityRankingResponseSchema
  >;