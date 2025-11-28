import Image from "next/image";

export default function About() {
  return (
    <section className="p-4">
      <div>
        <div className="py-4">
          <div className="flex gap-[11.33px]">
            <div className="flex-1 rounded-[5.85px] overflow-hidden p-2 shadow-md">
              <div>
                <h2 className="text-[17px] font-bold mb-3">Our Mission</h2>
                <p className="text-[8.41px] leading-[14.5px]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat ducimus commodi, officia nemo porro placeat soluta
                  obcaecati corporis maiores autu.
                </p>
              </div>
            </div>
            <div className="w-[179.07px] h-[118.04px] rounded-[5.85px] flex-1 overflow-hidden">
              <Image
                src="/images/heroImg.jpg"
                alt="our mission image"
                width={179.07}
                height={118.04}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
