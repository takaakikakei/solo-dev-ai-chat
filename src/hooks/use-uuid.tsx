import { customAlphabet } from "nanoid";
export { nanoid } from "nanoid";

const LOWER_ABC_NUM = "abcdefghijklmnopqrstuvwxyz0123456789";

export const lowerAlphabetNumberUuid = customAlphabet(LOWER_ABC_NUM, 24);

const BASE62_CHARS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const traceIdSuffix = customAlphabet(BASE62_CHARS, 5);

export function traceId(): string {
  return new Date().getTime().toString(36) + "-" + traceIdSuffix();
}

const UCLID_TIME_ORIGIN = 28211099074560;
const uclidSuffix = customAlphabet(BASE62_CHARS, 13);

export function uclid(): string {
  return (
    (new Date().getTime() + UCLID_TIME_ORIGIN).toString(36) + uclidSuffix()
  );
}

const chatIdSuffix = customAlphabet(BASE62_CHARS, 5);

export function generateChatId(): string {
  // UNIXエポックタイム(経過0.1秒)のBase36 + ランダムBase62(5文字)
  return Math.floor(Date.now() / 100).toString(36) + chatIdSuffix();
}
