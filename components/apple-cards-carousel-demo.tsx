"use client"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { X } from "lucide-react"

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} />)

  return (
    <div className="w-full h-full py-20" id="services">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Our Premium Catering Services
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

const DummyContent = ({ contentItems }: { contentItems: Array<{ title: string; description: string; imageUrl: string }> }) => {
  return (
    <>
      {contentItems.map((item, index) => {
        return (
          <div key={"dummy-content" + index} className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">{item.title}</span> {item.description}
            </p>
            <img
              src={item.imageUrl}
              alt="Catering service presentation"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        )
      })}
    </>
  )
}

const data = [
  {
    category: "Wedding Catering",
    title: "Make your special day unforgettable",
    src: "https://img.freepik.com/premium-photo/kachila-bhat-served-traditional-indian-wedding-with-elaborate-daccor_636537-472821.jpg",
    content: (
      <DummyContent
        contentItems={[
          {
            title: "Traditional Wedding Feast",
            description: "Experience the authentic taste of Odia wedding cuisine with our traditional dishes like Dalma, Santula, and Pakhala. Every dish is prepared with love and traditional recipes passed down through generations.",
            imageUrl: "https://img.freepik.com/free-photo/indian-wedding-food-spread_23-2149182393.jpg"
          },
          {
            title: "Modern Wedding Catering",
            description: "Blend tradition with contemporary flavors. Our modern wedding menus feature fusion dishes that appeal to all generations while maintaining the essence of Odia hospitality and taste.",
            imageUrl: "https://img.freepik.com/free-photo/elegant-wedding-reception-table-setup_23-2149182394.jpg"
          },
          {
            title: "Wedding Dessert Specialties",
            description: "End your special day with our signature desserts including Rasagola, Chhena Poda, and other traditional Odia sweets. Each dessert is crafted to perfection for your memorable celebration.",
            imageUrl: "https://img.freepik.com/free-photo/indian-sweets-desserts-arrangement_23-2149182395.jpg"
          }
        ]}
      />
    ),
  },
  {
    category: "Corporate Events",
    title: "Professional catering for business",
    src: "https://img.freepik.com/premium-photo/business-people-choosing-snacks-buffet-table_926199-4068231.jpg",
    content: (
      <DummyContent
        contentItems={[
          {
            title: "Conference Catering",
            description: "Keep your team energized with our professional conference catering. We offer healthy, delicious meals that boost productivity and impress your attendees with quality and presentation.",
            imageUrl: "https://img.freepik.com/free-photo/business-meeting-catering_23-2149182396.jpg"
          },
          {
            title: "Corporate Lunch Solutions",
            description: "Transform your workplace dining with our corporate lunch packages. Fresh, nutritious meals delivered on time with options for dietary restrictions and preferences.",
            imageUrl: "https://img.freepik.com/free-photo/corporate-lunch-buffet_23-2149182397.jpg"
          },
          {
            title: "Executive Dining",
            description: "Impress your clients with our executive dining services. Sophisticated menus, elegant presentation, and impeccable service for important business meetings and client entertainment.",
            imageUrl: "https://img.freepik.com/free-photo/executive-dining-setup_23-2149182398.jpg"
          }
        ]}
      />
    ),
  },
  {
    category: "Birthday Parties",
    title: "Celebrate with delicious flavors",
    src: "https://img.freepik.com/premium-photo/high-angle-view-cupcakes-table_1048944-3347917.jpg",
    content: (
      <DummyContent
        contentItems={[
          {
            title: "Kids Birthday Special",
            description: "Make your child's birthday magical with our fun and colorful kids' party catering. From themed decorations to kid-friendly menus, we create unforgettable birthday experiences.",
            imageUrl: "https://img.freepik.com/free-photo/kids-birthday-party-food_23-2149182399.jpg"
          },
          {
            title: "Adult Birthday Celebrations",
            description: "Sophisticated birthday catering for adults with gourmet dishes and elegant presentation. Perfect for milestone birthdays and special celebrations with friends and family.",
            imageUrl: "https://img.freepik.com/free-photo/adult-birthday-party-catering_23-2149182400.jpg"
          },
          {
            title: "Birthday Cake & Desserts",
            description: "Complete your birthday celebration with our custom cakes and dessert spreads. From traditional Odia sweets to modern pastries, we have something for every birthday theme.",
            imageUrl: "https://img.freepik.com/free-photo/birthday-cake-desserts_23-2149182401.jpg"
          }
        ]}
      />
    ),
  },
  {
    category: "Festival Catering",
    title: "Traditional Odia festival foods",
    src: "https://img.freepik.com/premium-photo/group-south-indian-food-like-masala-dosa-uttapam-idli-idly-wada-vada-sambar-appam-semolina-halwa-upma-served-banana-leaf-with-colourful-chutneys-selective-focus_466689-25668.jpg",
    content: (
      <DummyContent
        contentItems={[
          {
            title: "Ratha Yatra Special",
            description: "Celebrate the grand festival of Lord Jagannath with our traditional Ratha Yatra feast. Authentic Mahaprasad and festival specialties prepared with devotion and traditional methods.",
            imageUrl: "https://img.freepik.com/free-photo/ratha-yatra-festival-food_23-2149182402.jpg"
          },
          {
            title: "Durga Puja Feast",
            description: "Experience the divine taste of Durga Puja celebrations with our traditional bhog and festival meals. From Khichdi to various prasad items, we maintain the sanctity of the festival.",
            imageUrl: "https://img.freepik.com/free-photo/durga-puja-festival-feast_23-2149182403.jpg"
          },
          {
            title: "Diwali & Other Festivals",
            description: "Light up your festivals with our traditional Odia festival catering. From Diwali sweets to other festival specialties, we bring the authentic taste of Odisha to your celebrations.",
            imageUrl: "https://img.freepik.com/free-photo/diwali-festival-sweets_23-2149182404.jpg"
          }
        ]}
      />
    ),
  },
  {
    category: "Private Dining",
    title: "Intimate dining experiences",
    src: "https://img.freepik.com/premium-photo/catering-buffet-food-party-preparation-man_530697-39267.jpg",
    content: (
      <DummyContent
        contentItems={[
          {
            title: "Family Gatherings",
            description: "Create warm family memories with our intimate family gathering catering. Home-style Odia dishes that bring families together and create lasting bonds over delicious food.",
            imageUrl: "https://img.freepik.com/free-photo/family-gathering-catering_23-2149182405.jpg"
          },
          {
            title: "Anniversary Celebrations",
            description: "Mark your special milestones with our romantic anniversary catering. Elegant menus, intimate settings, and personalized service to make your anniversary truly memorable.",
            imageUrl: "https://img.freepik.com/free-photo/anniversary-celebration-catering_23-2149182406.jpg"
          },
          {
            title: "Intimate Dinner Parties",
            description: "Host sophisticated dinner parties with our intimate dining services. From menu planning to table setting, we handle every detail to ensure your guests have an exceptional dining experience.",
            imageUrl: "https://img.freepik.com/free-photo/intimate-dinner-party_23-2149182407.jpg"
          }
        ]}
      />
    ),
  },

]
