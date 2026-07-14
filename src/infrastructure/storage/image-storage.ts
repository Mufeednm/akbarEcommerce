export interface ImageStorage {
  delete(key: string): Promise<void>;
  getPublicUrl(key: string): string;
  upload(input: ImageUploadInput): Promise<ImageUploadResult>;
}
export interface ImageUploadInput {
  contentType: string;
  data: Buffer;
  key: string;
}
export interface ImageUploadResult {
  key: string;
  url: string;
}
