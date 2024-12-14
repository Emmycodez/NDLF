import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Lightbulb, Users } from "lucide-react";
import React from "react";


const GetInvolved = () => {
  return (
    <section id="get-involved" className="py-16 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">GET INVOLVED</h2>
        <div className="grid grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2" />
                Volunteer
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Join our community of dedicated volunteers and make a difference
                in someone's life.
              </p>
              <Button className="mt-4" variant="outline">
                Learn More
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2" />
                Donate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Your contribution helps us continue our mission of transforming
                lives.
              </p>
              <Button className="mt-4" variant="outline">
                Donate Now
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" />
                Partner With Us
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Collaborate with us on initiatives that create lasting positive
                change.
              </p>
              <Button className="mt-4" variant="outline">
                Contact Us
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
