"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  serviceType: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const serviceOptions = [
  { value: "wedding-catering", label: "Wedding Catering" },
  { value: "corporate-event", label: "Corporate Event" },
  { value: "birthday-parties", label: "Birthday Parties" },
  { value: "festival-catering", label: "Festival Catering" },
  { value: "private-dining", label: "Private Dining" },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const selectedService = watch("serviceType");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      if (
        !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
        !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ) {
        throw new Error("EmailJS configuration is missing.");
      }

      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        service_type: data.serviceType,
        message: data.message || "No message provided.",
        to_name: "Zaika Catering",
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Contact Us</CardTitle>
            <CardDescription className="text-gray-300">
              Tell us about your catering needs and we'll get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-gray-200">
                  Name
                </Label>
                <Input
                  id="username"
                  placeholder="Enter your name"
                  required
                  className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-400 focus:border-gray-600"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-200">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-400 focus:border-gray-600"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="service-type" className="text-gray-200">
                  Service Type
                </Label>
                <Select
                  value={selectedService}
                  onValueChange={(value) => setValue("serviceType", value)}
                >
                  <SelectTrigger className="bg-gray-900 border-gray-800 text-white">
                    <SelectValue placeholder="Select a catering service" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-gray-800">
                    {serviceOptions.map((service) => (
                      <SelectItem key={service.value} value={service.value} className="text-white hover:bg-gray-800">
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.serviceType && (
                  <p className="text-sm text-red-500">{errors.serviceType.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-200">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your event and catering requirements..."
                  rows={4}
                  className="bg-gray-900 border-gray-800 text-white placeholder:text-gray-400 focus:border-gray-600 resize-none"
                  {...register("message")}
                />
              </div>

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Submit Contact Form"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="bg-black border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Get In Touch</CardTitle>
            <CardDescription className="text-gray-300">
              Reach out to us directly through any of these channels.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Gmail</p>
                  <p className="text-white"><a href="mailto:mdwadud7777@gmail.com">mdwadud7777@gmail.com</a></p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Phone Number</p>
                  <p className="text-white"><a href="tel:+917077317979">+91 7077317979</a></p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <p className="text-gray-300 text-sm">WhatsApp</p>
                  <p className="text-white"><a href="https://wa.me/917077317979">+91 7077317979</a></p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Location</p>
                  <p className="text-white">Odisha, India</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800">
              <p className="text-gray-400 text-sm">
                We're available 24/7 to discuss your catering needs and provide personalized service for your special
                events.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
