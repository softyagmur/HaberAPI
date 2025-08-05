import cheerio from "cheerio";
import axios from "axios";

export async function sonDakika(): Promise<any[]> {
  try {
    const response = await axios.get("https://www.sozcu.com.tr/son-dakika/", {
      timeout: 15000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "tr-TR,tr;q=0.9,en;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        DNT: "1",
        Connection: "keep-alive",
        "Upgrade-Insecure-Requests": "1",
      },
    });

    const $ = cheerio.load(response.data);
    const haberler: any[] = [];

    $(".row.align-items-center.mb-4").each((index, element) => {
      const haber = {
        saat: $(element).find(".fw-bold.text-primary.fs-4").text().trim(),
        baslik: $(element).find(".fs-5.fw-semibold").text().trim(),
        ozet: $(element).find(".small.text-secondary").text().trim(),
        link: $(element).find("a").attr("href"),
        resim: $(element).find("img").attr("src"),
      };

      if (haber.baslik) {
        haberler.push(haber);
      }
    });

    return haberler;
  } catch (error) {
    console.error("Son dakika haberleri alınırken hata oluştu:", error);
    return [];
  }
}
