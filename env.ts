import { z } from "zod";

const envSchema = z.object({
 
COMPANY_NAME: z.string().default("The Lens Club"),
SITE_NAME: z.string().default("Next.js Frontend | Shopify Backend | Commerce 2.0"),
SHOPIFY_REVALIDATION_SECRET: z.string().default("a45f078a-5d2f-47e7-a350-9d48ea6ef8e2"),
SHOPIFY_STOREFRONT_ACCESS_TOKEN: z.string().default("f3bc6730da7d97b568654fe2acf42850"),
SHOPIFY_STORE_DOMAIN: z.string().default("the-lensclub.myshopify.com"),
  
});

envSchema.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}
