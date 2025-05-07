import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our History</h1>
        <p className="text-xl text-gray-600 mb-12">Celebrating 39 years of Lighthouse Baptist Church, Bronx</p>
      </div>

      {/* History Section */}
      <section id="History" className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-center mb-16">
            <p className="text-gray-600 leading-relaxed">
              The founding Pastor of the Lighthouse Baptist Church is the Rev. Norman Stewar Pator Stewar and his wife,
              Claudette served from 1996 to 2012. Rev Pual Christe after serving as interim pastor for two years was installed as
              pastor in October 2012. Rev. Christie and his wife, hauna, affectionaltely knows as Sis Debbie continue to server. LBC
              is committed to serving out Lord Jesus Christ and our Community in The Shadow of the Cross
            </p>
          </div>

          {/* Leadership Section */}
          <div className="space-y-16">
            {/* Pastor Stewart */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-xl shadow-sm">
              <Avatar className="h-32 w-32 flex-shrink-0">
                <AvatarImage src="/images/Pastor.jpg" alt="Pastor Stewart" />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <div className="text-left space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Rev. Norman Stewart</h3>
                  <p className="text-lg text-gray-600">Founding Pastor (1996-2012)</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  In 1995, under the visionary* leadership, of Rev. Stewart, and much prayer, the Church purchased the property and building we are currently worshipping in.
                  The Church became affiliated with the Metropolitan New York Baptist Association and the Southern Baptist Convention. The Church experienced great growth, and
                  the new membership was involved in community outreach along with financial aid to churches in Jamaica, W.I.
                  Pastor Stewart and his wife, Jean, served as the First Pastor and First Lady from 1981 to 1996.
                  In 1996 they relocated to Georgia; Pastor Stewart had gained a reputation of being a church planter and visionary.
                </p>
              </div>
            </div>

            {/* Pastor Ketchens */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-xl shadow-sm">
              <Avatar className="h-32 w-32 flex-shrink-0">
                <AvatarImage src="/images/Resized_Lighthouse_Baptist_Church.jpg" alt="Pastor Ketchens" />
                <AvatarFallback>PK</AvatarFallback>
              </Avatar>
              <div className="text-left space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Rev. Victor Ketchens</h3>
                  <p className="text-lg text-gray-600">Previous Pastor (1996-2010)</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  From 1996 to 2010 the Rev. Victor Ketchens and his wife Claudette served. Pastor Ketchens was instrumental in helping the church to become involved in &quot;Global Missions&quot;.
                  From 2000 to 2006 Pastor Ketchens, his wife, Sis Claudette Ketchens, Sis Elsie * Glaves, Sis. Violet Clarke, and Sis. Julie Clarke (now Joseph) made many a journeys to the
                  Dominican Republic, Cuba, Romania, and the West African countries of Benin* and Toga. We continue to financially support and pray for our sister church, Light of the World Ministry in Toga.
                  The Rev. Amos Genesis is the pastor. Pastor Ketchens and his family relocated to Florida in 2010. Paul Christie, who served the Lighthouse family faithfully as head Deacon, was asked to act as interim Pastor
                </p>
              </div>
            </div>

            {/* Pastor Christie */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-xl shadow-sm">
              <Avatar className="h-32 w-32 flex-shrink-0">
                <AvatarImage src="/images/Pastor.jpg" alt="Pastor Christie" />
                <AvatarFallback>PC</AvatarFallback>
              </Avatar>
              <div className="text-left space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Rev. Paul Christie</h3>
                  <p className="text-lg text-gray-600">Current Pastor (2012-Present)</p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  In October 2012 Rev. Christie was called to be the Pastor of Lighthouse Baptist Church, along with his wife Shauna (aka Debbie) Christie and his four children.
                  In the past 5 years LBC, Bronx has continued in its pursuit of engaging with its community – (establishing a food ministry; ministering to a local Nursing Home);
                  encouraging our youth – (Supporting the Summer Haven Camp; publicly acknowledging those who are graduating from various levels and offering them a small stipend;
                  encouraging those who are interested in the Praise Dance Ministry); maintaining our support of national and international ministries –
                  (Missions Door, The Gideons, Faith Cometh by Hearing, USA: Fairview Baptist Bible College, JA, WI: Cruz Bay Baptist, St. John VI: Light of the World Ministries, West Africa)
                  and encouraging our members to build and sustain relationships that reflect the love of our heavenly Father and Jesus Christ his Son has for us and continually demonstrates to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}