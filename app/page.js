export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px",
        fontFamily: "sans-serif",
        direction: "rtl",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "10px",
        }}
      >
        منصة بطاقات عيد الأضحى
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "40px",
        }}
      >
        صمم بطاقة معايدة احترافية خلال ثوانٍ
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>قالب ذهبي فاخر</h2>

          <p>
            بطاقة تهنئة رسمية بتصميم فاخر مناسب للعيد
          </p>

          <button
            style={{
              background: "#000",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            استخدام القالب
          </button>
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h2>قالب مع صورة</h2>

          <p>
            أضف صورتك الشخصية داخل بطاقة العيد
          </p>

          <button
            style={{
              background: "#000",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            استخدام القالب
          </button>
        </div>
      </div>
    </main>
  );
              }
