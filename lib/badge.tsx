export function getBadgeClass(
    badge: "New" | "Popular" | "Best Seller" | null,
) {
    switch (badge) {
        case "New":
            return "bg-[radial-gradient(50%_50%,rgba(51,212,120,0)_0%,rgba(51,212,120,0.2)_100%)] text-[#33D478]";

        case "Popular":
            return "bg-[radial-gradient(50%_50%,rgba(144,97,255,0)_0%,rgba(144,97,255,0.2)_100%)] text-[#9061FF]";

        case "Best Seller":
            return "bg-[radial-gradient(50%_50%,rgba(255,136,0,0)_0%,rgba(255,136,0,0.2)_100%)] text-[#FF8800]";

        default:
            return "";
    }
}