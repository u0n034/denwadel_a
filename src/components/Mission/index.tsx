import { Container } from '../common/Container';
import { SectionHeader } from '../common/SectionHeader';

const Mission = () => {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        <SectionHeader
          englishTitle="MISSION"
          japaneseTitle="私たちの使命"
        />
        <div className="mb-12 max-w-6xl mx-auto relative">
          <div className="relative ml-auto w-full md:w-[65%] bg-yellow-50/95 rounded-lg p-8 md:p-12 md:pl-32">
            <div className="text-left space-y-4 text-base text-gray-700 relative z-20">
              <p className="text-lg md:text-xl text-yellow-500 font-medium mb-8">
                能登半島地震により、多くの方が仕事を失い、故郷を離れることを余儀なくされています。
              </p>
              <p>みなさま、こんにちは。<br />「デンワデル」を運営する株式会社タレンシア代表の瀬口庄一朗です。</p>
              
              <p>私は、能登半島の中島町で生まれ育ちました。2024年1月1日に発生した能登半島地震は、私の心に大きな衝撃を与えました。被災地のニュースを目にするたびに、ふるさとへの思いが強まり、「自分に何ができるのか」を考え続ける日々が続きました。</p>
              
              <p>幸いにも、私の家族は無事でしたが、地元では多くの方が仕事を失い、やむを得ず能登を離れる選択をされています。そこで私は、今まで東京で培ってきた経験を能登に還元し、地域に新たな働く場を作ることで、ふるさとの未来を支えたいと決意しました。</p>
              
              <p>「デンワデル」は、そんな思いから生まれたサービスです。能登を拠点に電話代行業務を提供し、地元の雇用創出を目指しています。このサービスをご利用いただくことで、ビジネスをサポートするだけでなく、能登半島の復興と地域経済の活性化にもつながります。</p>
              
              <p>私たちは、能登の地で仕事を通じて地域とともに成長し、全国のお客様に最高のサービスを提供することをお約束します。皆さまとともに、能登の未来を築いていけることを心より願っております。</p>
              
              <p>今後とも「デンワデル」をどうぞよろしくお願い申し上げます。</p>
              
              <p className="text-right mt-8">
                株式会社タレンシア<br />
                代表取締役 瀬口庄一朗
              </p>
            </div>
          </div>
          
          <div className="static mt-8 w-full md:absolute md:left-0 md:bottom-12 md:w-[40%] md:mt-0">
            <img
              src="/images/noto2.jpg"
              alt="能登半島の風景"
              className="w-full max-w-md mx-auto md:mx-0 h-auto rounded-lg shadow-2xl transform transition-transform hover:scale-105"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6">
            <div className="bg-yellow-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">地域への想い</h3>
            <p className="text-sm text-gray-700">デンワデルは、能登の復興と未来への希望を形にするプロジェクトです。電話代行を通じて、新しい働く場を創出します。</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-yellow-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">雇用創出</h3>
            <p className="text-sm text-gray-700">地域の方々が故郷で働き続けられる環境を整備。時間や場所にとらわれない新しい働き方を提供します。</p>
          </div>
          
          <div className="text-center p-6">
            <div className="bg-yellow-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-900">行動でつなぐ、復興支援</h3>
            <p className="text-sm text-gray-700">電話対応1件につき1円の復興支援。サービスのご利用が、直接的な地域支援につながります。</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Mission; 