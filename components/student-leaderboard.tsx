"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Keyboard, Book, Star } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ProfilePicturePlaceholder from "@/lib/profile-picture-placeholder.jpg";

type User = {
  id: string;
  first_name: string;
  last_name: string;
  level: number;
  completed_classes: string[];
};

type Testimonial = {
  class: string;
  stars: number;
  description: string;
};

export function StudentLeaderboard({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  // Mock data setup
  useEffect(() => {
    if (open) {
      // Mock users data
      const mockUsers: User[] = [
        {
          id: "1",
          first_name: "Alex",
          last_name: "Johnson",
          level: 12,
          completed_classes: ["Algebra", "Biology", "Chemistry"]
        },
        {
          id: "2",
          first_name: "Samira",
          last_name: "Khan",
          level: 10,
          completed_classes: ["Physics", "Geometry", "World History"]
        },
        {
          id: "3",
          first_name: "Miguel",
          last_name: "Rodriguez",
          level: 8,
          completed_classes: ["Literature", "Spanish", "Art History"]
        }
      ];

      setUsers(mockUsers);
    }
  }, [open]);

  // Mock testimonials data mapped by user ID
  const mockTestimonials: Record<string, Testimonial[]> = {
    "1": [
      {
        class: "Algebra",
        stars: 5,
        description: "The instructor made complex concepts easy to understand. Highly recommend!"
      },
      {
        class: "Biology",
        stars: 4,
        description: "Loved the interactive labs. Would take another class with this teacher."
      }
    ],
    "2": [
      {
        class: "Physics",
        stars: 5,
        description: "Challenging but rewarding. The problem sets really helped me learn."
      },
      {
        class: "World History",
        stars: 4,
        description: "Fascinating perspectives. The lectures were always engaging."
      }
    ],
    "3": [
      {
        class: "Literature",
        stars: 5,
        description: "Changed how I view classic texts. Discussions were thought-provoking."
      }
    ]
  };

  const fetchTestimonials = (userId: string) => {
    // Return testimonials for the user or empty array if none exist
    setTestimonials(mockTestimonials[userId] || []);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="z-50 fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => onOpenChange(false)}
        >
          <motion.div
            initial={{ y: 50, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="p-6 bg-white/90 backdrop-blur-lg relative">
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-row gap-4">
                    <Keyboard className="w-4 h-4 text-emerald-600" />
                    <h4 className='text-sm text-slate-600'>
                      Press L to Leave Leadeboard
                    </h4>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">
                    {selectedUser ? `${selectedUser.first_name}'s Progress` : 'Student Leaderboard'}
                  </h3>
                  {selectedUser === null && (
                    <h4 className='text-sm text-slate-600'>
                      Click on a student to see their testimonials
                    </h4>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (selectedUser) {
                      setSelectedUser(null);
                    } else {
                      onOpenChange(false);
                    }
                  }}
                  className="text-emerald-600 hover:text-emerald-800 cursor-pointer"
                >
                  {selectedUser ? '← Back' : '✕'}
                </Button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedUser ? 'testimonials' : 'leaderboard'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {!selectedUser && users.length === 0 ? (
                    <div className="text-center p-6 space-y-4">
                      <p className="text-emerald-700">There are no students here!</p>
                      <Link
                        href="/#program"
                        onClick={() => onOpenChange(false)}
                        className="inline-block px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        Learn why our program is the best
                      </Link>
                    </div>
                  ) : !selectedUser ? (
                    <div className="space-y-4">
                      {users.map((user) => (
                        <motion.div
                          key={user.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.15 }}
                          onClick={() => {
                            setSelectedUser(user);
                            fetchTestimonials(user.id);
                          }}
                          className="cursor-pointer flex items-center justify-between p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10">
                              <Image
                                src={ProfilePicturePlaceholder}
                                alt={`${user.first_name}'s profile`}
                                className="rounded-full"
                                fill
                                sizes="(max-width: 640px) 40px, 40px"
                              />
                            </div>
                            <div>
                              <p className="font-medium text-emerald-900">
                                {user.first_name} {user.last_name}
                              </p>
                              <p className="text-sm text-emerald-600">Level {user.level}</p>
                            </div>
                          </div>
                          <button
                            className="cursor-pointer flex items-center gap-1 text-emerald-600 hover:text-emerald-800"
                          >
                            <Book className="w-4 h-4" />
                            <span>{user.completed_classes.length} classes</span>
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {testimonials.length > 0 ? (
                        testimonials.map((testimonial) => (
                          <motion.div
                            key={`${selectedUser.id}-${testimonial.class}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.15 }}
                            className="p-3 bg-emerald-50 rounded-lg"
                          >
                            <div className="flex justify-between items-center mb-2">
                              <h4 className="font-medium text-emerald-900">{testimonial.class}</h4>
                              <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    className={`w-4 h-4 ${i < testimonial.stars ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                                    key={i}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="text-sm text-emerald-600">{testimonial.description}</p>
                          </motion.div>
                        ))
                      ) : (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-center py-6 text-emerald-700"
                        >
                          No testimonials available yet
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}