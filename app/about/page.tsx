import News from '../News';

export const metadata = {
  title: 'About',
  description: 'Generated by create next app',
};

export default function AboutPage() {
  return (
    <>
      <div className="subGrid">
        <div className="inside">
          <div className="threeOneGrid">
            <div className="threeGrid">
              <h1>About us</h1>
              <p>
                Viruses are curious things. The tiny tagalongs aren't exactly
                alive by most definitions, but they're not really inanimate
                either. They've flourished and diversified for billions of years
                and perhaps even had a hand—or a squishy protein coating—in
                helping the first complex cellular life come to be.
              </p>

              <p>
                While these microbes have a dizzying array of functions and
                health effects, the structure of a virus is surprisingly simple.
                Each one consists of genetic material—either DNA or
                RNA—encapsulated in a protein pocket called a capsid. Some are
                additionally enveloped in a soft, lipid wrapping. These tiny
                virus packages are just tens to a few hundreds of nanometers
                across. This makes them smaller than most bacteria, which can be
                a small as roughly a tenth the size of a human blood cell. Such
                a tiny size means that you can't even spot most viruses with a
                light microscope.
              </p>

              <p>
                The one exception, a group known as giant viruses, has members
                with astonishingly large genomes. These mega-viruses are
                hundreds of times larger than most, with capsids that span
                roughly 400 to 500 nanometers across and full viral forms that
                can measure up to 750 nanometers across.
              </p>
            </div>
          </div>
        </div>
      </div>
      <News />
    </>
  );
}
