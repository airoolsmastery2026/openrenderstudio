import { describe, expect, it } from "vitest";
import { PageEvidence } from "../../src/recon/evidence";

describe("PageEvidence", () => {
  it("accepts the M0 contract", () => {
    const result = PageEvidence.safeParse({
      version: "evidence-v1",
      url: "https://example.com",
      capturedAt: new Date().toISOString(),
      viewports: [
        { name: "phone", width: 390, height: 844 },
        { name: "ipad", width: 768, height: 1024 },
        { name: "pc", width: 1440, height: 900 }
      ],
      sections: [], assets: [], screenshots: []
    });
    expect(result.success).toBe(true);
  });
});
