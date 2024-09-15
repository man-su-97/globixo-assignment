import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  PlayCircle,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";
import bg from "@/app/asset/james-genchi-U8RNJeZsV8o-unsplash.jpg";
import logo from "./asset/derelogo.png";
import girlAvtr from "./asset/d937efbc-e8be-41dd-83ac-b40ecf96d110.jpg";
import manAvtr from "./asset/f6b6e5f0-9fcc-4156-b91a-782054de096f.jpg";
import imga from "./asset/beautiful-anime-character-cartoon-scene.jpg";
import fileA from "./asset/cecelia-chang-bbMps_ehaoU-unsplash.jpg";
import fb from "./asset/facebook.png";
import wp from "./asset/whatsapp.png";
import tw from "./asset/twitter.png";
import ig from "./asset/instagram.png";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-gray-100 text-white p-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-purple-900">Globixo</h1>
        </div>
      </header>

      <div className="relative">
        <Image
          src={bg}
          alt="Exhibition hall"
          width={1920}
          height={800}
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-transparent">
          <div className="max-w-7xl mx-auto px-4 py-16 text-white flex-col space-y-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-lg p-2 shadow-md">
                  <Image src={logo} width={40} height={40} alt="Zoloni logo" />
                </div>
                <div className="hidden md:block">
                  <h2 className="text-xl font-bold">Zoloni</h2>
                  <p className="text-sm text-gray-200">
                    Research & Development
                  </p>
                </div>
              </div>
              <div className="w-px h-12 bg-gray-300 mx-4"></div>
              <div className="flex items-center space-x-4">
                <div className="bg-white rounded-lg p-2 shadow-md">
                  <Image
                    src={logo}
                    width={40}
                    height={40}
                    alt="Bharat Food Tech 2024 logo"
                  />
                </div>
                <div className="hidden md:block">
                  <h2 className="text-xl font-bold">Bharat Food Tech 2024</h2>
                  <p className="text-sm text-gray-200">New Delhi, India</p>
                </div>
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Welcome to Zoloni
              <br />
              Exhibiting at Bharat Food Tech 2024
            </h2>
            <div className="flex items-center space-x-4 mb-6 text-sm">
              <div className="flex items-center space-x-1">
                <MapPin size={16} />
                <span>New Delhi, India</span>
              </div>
              <div className="w-px h-5 bg-gray-300 mx-4"></div>

              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>12th Jul 2024-15th July 2024</span>
              </div>
              <div className="w-px h-5 bg-gray-300 mx-4"></div>

              <div className="flex items-center space-x-1">
                <Building2 size={16} />
                <span>Hall-2, Booth 23</span>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 rounded text-white  md:w-72">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <main className=" max-w-7xl mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-16">
          <div className="md:col-span-2 space-y-8">
            <Card className="bg-white shadow">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Company&apos;s Business
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Company Type</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="rounded-full p-2">
                        Contract Manufacturing
                      </Badge>
                      <Badge variant="outline" className="rounded-full p-2">
                        Export
                      </Badge>
                      <Badge variant="outline" className="rounded-full p-2">
                        White Level Brands
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Product Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="rounded-full p-2">
                        Juices
                      </Badge>
                      <Badge variant="outline" className="rounded-full p-2">
                        Vegetables
                      </Badge>
                      <Badge variant="outline" className="rounded-full p-2">
                        Grain
                      </Badge>
                      <Badge variant="outline" className="rounded-full p-2">
                        Grain
                      </Badge>
                      <Badge variant="outline" className="rounded-full p-2">
                        Grain
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Product Items</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="rounded-full p-2">
                        Item 01
                      </Badge>
                      <Badge variant="outline" className="rounded-full p-2">
                        Item 02
                      </Badge>
                      <Badge variant="outline" className="rounded-full p-2">
                        Item 03
                      </Badge>
                      <Badge variant="outline" className="rounded-full p-2">
                        Item 04
                      </Badge>
                      <Badge variant="outline" className="rounded-full p-2">
                        Item 05
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
                <p className="text-gray-600 mb-4">
                  1000 Farms Pvt. Ltd. is a pioneering agricultural company
                  focused on revolutionizing the farming industry. Established
                  in [Year], our mission is to enhance food security and promote
                  sustainable agricultural practices. We provide innovative
                  solutions across diverse landscapes, supporting farmers and
                  fostering a robust agricultural ecosystem.
                </p>
                <p className="text-gray-600">
                  We empower farmers with advanced tools and techniques, promote
                  eco-friendly farming, and enhance crop yields through
                  innovation. Our services include precision farming,
                  agricultural consultancy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Videos & Images</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-video">
                    <Image
                      src={fileA}
                      layout="fill"
                      objectFit="cover"
                      alt="Event video thumbnail"
                      className="rounded-lg"
                    />
                    <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12" />
                  </div>
                  <div className="relative aspect-video">
                    <Image
                      src={fileA}
                      layout="fill"
                      objectFit="cover"
                      alt="Event image"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="relative aspect-video">
                    <Image
                      src={fileA}
                      layout="fill"
                      objectFit="cover"
                      alt="Event image"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="relative aspect-video">
                    <Image
                      src={imga}
                      layout="fill"
                      objectFit="cover"
                      alt="Event image"
                      className="rounded-lg"
                    />
                  </div>
                </div>
                <Button variant="link" className="mt-4 text-purple-600">
                  Show All
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Files</h2>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center">
                      <Image
                        src={imga}
                        width={150}
                        height={150}
                        alt={`File ${i}`}
                        className="mb-2 mx-auto"
                      />
                      <p className="text-sm text-gray-600">File Name 0{i}</p>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="mt-4 text-purple-600">
                  Show All
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="shadow bg-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Exhibitor Contact</h2>
                <div className="space-y-2 text-sm">
                  <div>
                    <strong className="mr-6">Name:</strong> Rajesh Kumar
                  </div>
                  <div>
                    <strong className="mr-7">Email:</strong>
                    Rajeshkumar@gmail.com
                  </div>
                  <div>
                    <strong className="mr-4">Phone:</strong> +91 6230126530
                  </div>
                  <div className="flex gap-3 ">
                    <strong>Address:</strong>
                    <div>
                      B702, Pramukh Plaza, Cardinal Graciaus Rd, near Western
                      Express Metro Station, Andheri East, Mumbai, Maharashtra
                      400059
                    </div>
                  </div>
                  <p>
                    <strong className="mr-2">Website:</strong>{" "}
                    <a
                      href="http://www.zolonihere.com"
                      className="text-purple-600 text-md font-bold"
                    >
                      www.zolonihere.com
                    </a>
                  </p>
                  <div className="flex space-x-5 mt-2 gap-2">
                    <strong>Social:</strong>
                    <div className="flex gap-5 ">
                      <Image
                        src={fb}
                        width={24}
                        height={24}
                        alt="Zoloni logo"
                      />
                      <Image
                        src={wp}
                        width={24}
                        height={24}
                        alt="Zoloni logo"
                      />
                      <Image
                        src={ig}
                        width={20}
                        height={20}
                        alt="Zoloni logo"
                      />
                      <Image
                        src={tw}
                        width={20}
                        height={20}
                        alt="Zoloni logo"
                      />
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white">
                  Contact Us
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Zoloni Past exhibitions
                </h2>
                <div className="space-y-4">
                  {[
                    "Saudi food Expo",
                    "South Asia food Expo",
                    "Australia food Expo",
                    "Antartica food Expo",
                    "Australia food Expo",
                  ].map((expo, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <Image
                        src={girlAvtr}
                        width={48}
                        height={48}
                        alt={expo}
                        className="rounded-full"
                      />
                      <div>
                        <p className="font-semibold">{expo}</p>
                        <p className="text-sm text-gray-500">
                          12 July - 15 July 2024
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="mt-4 text-purple-600">
                  Show All
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Members</h2>
                <div className="space-y-4">
                  {["Aditi Sharma", "Mehak Sharma", "Akshay Sharma"].map(
                    (member, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <Image
                          src={manAvtr}
                          width={48}
                          height={48}
                          alt={member}
                          className="rounded-full"
                        />
                        <div>
                          <p className="font-semibold">{member}</p>
                          <p className="text-sm text-gray-500">
                            Marketing Head
                          </p>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Phone size={16} />
                            <span>+91 9876543210</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Mail size={16} />
                            <span>aditi123@gmail.com</span>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
                <Button variant="link" className="mt-4 text-purple-600">
                  Show All
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-purple-900 text-white p-4 mt-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
