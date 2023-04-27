import { useEffect } from "react";

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* TODO: make heigh dynamic/responsive */}
      <div
        class="calendly-inline-widget"
        data-url="https://calendly.com/apdentalclinichn/cita?background_color=e9e9e9&primary_color=c98d14"
        style={{ minWidth: "320px", height: "1000px" }}
      ></div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </>
  );
};

export default Calendly;
