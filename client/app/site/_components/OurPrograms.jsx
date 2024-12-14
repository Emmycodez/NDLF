import { BookOpen, Home, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const OurPrograms = () => {
  return (
    <section id="programs" className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">OUR PROGRAMS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Rehabilitation",
              description:
                "Supporting individuals on their journey to recovery and wellness.",
            },
            {
              title: "Education",
              description:
                "Providing learning opportunities to empower personal and professional growth.",
            },
            {
              title: "Job Training",
              description:
                "Equipping individuals with skills for sustainable employment and career development.",
            },
          ].map((program) => (
            <Card key={program.title} className="border-red-600 border-t-4">
              <CardHeader>
                <CardTitle className="text-red-600">{program.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700">
                  {program.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
