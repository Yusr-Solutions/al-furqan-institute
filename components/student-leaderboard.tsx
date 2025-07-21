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
          first_name: "Fatima",
          last_name: "",
          level: 12,
          completed_classes: ["Quran", "Arabic", "Fiqh"]
        },
        {
          id: "2",
          first_name: "Sarah",
          last_name: "",
          level: 10,
          completed_classes: ["Fiqh"]
        },
        {
          id: "3",
          first_name: "Ahmad",
          last_name: "",
          level: 8,
          completed_classes: ["Arabic", "Fiqh"]
        }
      ];

      setUsers(mockUsers);
    }
  }, [open]);

  // Updated testimonials matching Islamic subjects
  const mockTestimonials: Record<string, Testimonial[]> = {
    "1": [
      {
        class: "Quran",
        stars: 5,
        description: "The teacher's recitation was beautiful and explanations were clear. My tajweed improved significantly!"
      },
      {
        class: "Arabic",
        stars: 4,
        description: "Great foundation for understanding Quranic Arabic. Grammar lessons were especially helpful."
      }
    ],
    "2": [
      {
        class: "Fiqh",
        stars: 5,
        description: "Clear explanations of worship rulings. Practical examples made complex topics easy to grasp."
      }
    ],
    "3": [
      {
        class: "Fiqh",
        stars: 5,
        description: "Comprehensive coverage of daily practices. The instructor's knowledge of madhabs was impressive."
      },
      {
        class: "Arabic",
        stars: 4,
        description: "Excellent course for conversational Arabic. I can now hold basic discussions confidently."
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