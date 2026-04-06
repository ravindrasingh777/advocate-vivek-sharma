"use client";

export default function WhatsAppJoinSection() {
  return (
    <section className="w-full py-12 px-4 bg-green-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700">
            हमारे WhatsApp ग्रुप से जुड़ें
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-700 max-w-xl">
            अधिवक्ता सुरक्षा और महत्वपूर्ण अपडेट पाने के लिए हमारे WhatsApp ग्रुप से जुड़ें। 
            नीचे दिए गए QR कोड को स्कैन करें और तुरंत जुड़ें।
          </p>

          {/* Button (optional) */}
          {/* <a
             href="https://chat.whatsapp.com/FdJGdP3zG3nGpZi41z5Y1T?mode=gi_t"
            target="_blank"
            className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 transition"
          >
            अभी जुड़ें
          </a> */}
        </div>

        {/* RIGHT QR BOX */}
        <div className="flex justify-center">
          <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl w-full max-w-sm text-center">
            
            {/* QR Image */}
            <img
              src="/whatsappJoin.jpg" // 👈 apna QR yaha lagana
              alt="WhatsApp QR Code"
              className="w-full h-auto rounded-lg"
            />

            <p className="mt-4 text-xs sm:text-sm text-gray-600">
              QR को स्कैन करें और सीधे WhatsApp ग्रुप से जुड़ें
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}