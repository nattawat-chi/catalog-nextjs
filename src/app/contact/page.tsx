import { MailIcon } from "lucide-react";

function page() {
  return (
    <div className="flex flex-col h-100 justify-center items-center gap-4 text-center max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <div className="flex flex-col items-center gap-2">
        <div className="text-lg text-muted-foreground flex items-center gap-2">
          <MailIcon className="w-8 h-8" />
          <span className="font-bold">Email:</span>
          <a href="mailto:nattawatchi2140@gmail.com">
            {" "}
            Nattawatchi2140@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold">Phone:</span>
          <a href="#">+66 88 252 5766</a>
          <div className="flex items-center gap-2">
            <span className="font-bold">Address:</span>
            <a href="#"> 123/456</a>
          </div>
        </div>
      </div>
      <div className="text-lg text-muted-foreground text-center mb-4">
        We are a team of passionate individuals who are dedicated to providing
        the best products and services to our customers. We are a team of
        passionate individuals who are dedicated to providing the best products
        and services to our customers.
      </div>
    </div>
  );
}

export default page;
