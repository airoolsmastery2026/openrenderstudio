import { z } from "zod";

export const ViewportName = z.enum(["phone","ipad","pc"]);
export type ViewportName = z.infer<typeof ViewportName>;
export const Viewport = z.object({ name: ViewportName, width: z.number().int().positive(), height: z.number().int().positive() });
export const Rect = z.object({ x: z.number(), y: z.number(), width: z.number(), height: z.number() });
export const ElementEvidence = z.object({
  tag: z.string(), selector: z.string(), rect: Rect, text: z.string().optional(),
  classes: z.array(z.string()).default([]), styles: z.record(z.string()).default({})
});
export const SectionEvidence = z.object({
  name: z.string(), selector: z.string(), rect: Rect, elements: z.array(ElementEvidence)
});
export const PageEvidence = z.object({
  version: z.literal("evidence-v1"), url: z.string().url(), capturedAt: z.string(),
  viewports: z.array(Viewport), sections: z.array(SectionEvidence),
  assets: z.array(z.object({
    kind: z.enum(["image","video","svg","font","background","other"]),
    url: z.string().optional(), selector: z.string().optional(),
    source: z.enum(["dom","css","link","meta"]).optional()
  })),
  screenshots: z.array(z.object({ viewport: ViewportName, path: z.string() }))
});
export type PageEvidence = z.infer<typeof PageEvidence>;
