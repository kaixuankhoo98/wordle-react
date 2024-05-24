import { z } from "zod";

// Word
export type WordSchema = z.infer<typeof wordSchema>;
export const wordSchema = z.object({
  word: z.string().nullable()
});

// Guesses
export type GuessesSchema = z.infer<typeof guessesSchema>;
export const guessesSchema = z.array(wordSchema);

export const useGetCorrectWord: () => WordSchema = () => {
  const correctWord: WordSchema = {
    word: 'thanks'
  };
  return correctWord;
}