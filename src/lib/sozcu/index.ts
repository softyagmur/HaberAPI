import { sonDakika } from "./sonDakika";

type message =
  | "Bu paketi kişisel amaçla kullandığımı ve tüm sorumluluğun bana ait olduğunu kabul ediyorum."
  | "I acknowledge that I am using this package for personal purposes and that I am solely responsible for its use.";

export class SozcuHaber {
  private baseUrl: string = "https://www.sozcu.com.tr";

  constructor(message: message) {
    if (
      message !==
        "Bu paketi kişisel amaçla kullandığımı ve tüm sorumluluğun bana ait olduğunu kabul ediyorum." &&
      message !==
        "I acknowledge that I am using this package for personal purposes and that I am solely responsible for its use."
    ) {
      throw new Error(
        "Kullanım koşullarını kabul etmeden bu paketi kullanamazsınız."
      );
    }
  }

  async getBaseUrl(): Promise<string> {
    return this.baseUrl;
  }

  async sonDakika(): Promise<any[]> {
    return await sonDakika(this.baseUrl);
  }
}
