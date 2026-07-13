"use client";

import { AnimatePresence, motion } from "motion/react";
import { FiPlus } from "react-icons/fi";

type Props = {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
};

export default function FaqItem({
    question,
    answer,
    isOpen,
    onClick,
}: Props) {
    return (
        <div className="border-b border-[#212121] py-5 px-10">
            <button
                onClick={onClick}
                className="flex w-full items-center justify-between text-left"
            >
                <h2 className="font-gambetta text-[28px] tablet:text-[28px] text-white">
                    {question}
                </h2>

                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: .25 }}
                >
                    <FiPlus size={22} className="text-white" />
                </motion.div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{
                            height: 0,
                            opacity: 0,
                        }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: .2,
                            ease: "easeInOut",
                        }}
                        className="overflow-hidden"
                    >
                        <p className="mt-4 max-w-2xl text-[14px] tablet:leading-6 desktop:text-[15px] text-[#ABABAB]">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}