export default function MyMethod() {
  return (
    <>
      <p className="dungeon-synth__content-block">
        i don't have a whole lot of music theory knowledge, but i'll do my best
        to explain how i go about making dungeon synth. keep in mind that what
        works for me might not work for you. use this loose guide as a starting
        point. experiment with things to see what works best for you and your
        unique brand of creativity.
      </p>
      <p className="dungeon-synth__content-block">
        before i write any music i pick a set of maybe 4-8 instruments/synth
        patches to prevent decision paralysis. setting limitations on music may
        seem counterintuitive, but it can also help spark creativity. too many
        choices lends itself to indecision and abandoned projects. the timbre
        (or sound, like how a violin sounds different than a trumpet or a
        clarinet) of the instruments plays a major role, too. for instance,
        brass instruments can sound victorious or like a battle. whereas harp or
        piano can create a more delicate or introspective atmosphere. i make
        most of the sounds on my albums in Synth1, and try to create a couple
        new sounds for each album.
      </p>
      <p className="dungeon-synth__content-block">
        once the instruments are chosen, i start making some short musical
        ideas. nothing set in stone, and most of them end up getting deleted
        eventually. i find that playing around on my MIDI keyboard is quicker &
        easier than using Reaper's piano roll, but sometimes i use the piano
        roll to change things up. i usually start by playing some octaves,
        fifths, or fourths in a lower register and moving that 'shape' around
        until i find a series of chords that sound good together. 'octave',
        'fifth', and 'fourth' are words we can use to describe the space between
        two notes. if we start on C that is 1, D is 2, E is 3, and so on. don't
        worry if you don't know the piano key note names. if we're only using
        white keys all we have to do is count up until we get to 4 (fourth), 5
        (fifth), or 8 (octave). we just need to make sure we count the note
        we're starting on as 1.
      </p>
      <figure className="dungeon-synth__figure-container" role="group">
        <figure>
          <img
            src="images/dungeon-synth/octave.png"
            alt="an octave interval in the piano roll"
          />
          <figcaption>octave</figcaption>
        </figure>
        <figure>
          <img
            src="images/dungeon-synth/fifth.png"
            alt="a fifth interval in the piano roll"
          />
          <figcaption>fifth</figcaption>
        </figure>
        <figure>
          <img
            src="images/dungeon-synth/fourth.png"
            alt="a fourth interval in the piano roll"
          />
          <figcaption>fourth</figcaption>
        </figure>
      </figure>
      <p className="dungeon-synth__content-block">
        after i get a short progression of 4 chords (sometimes more chords) i
        hit play, loop it, and start noodling around in a higher register to
        find some melody ideas. i try to find a sequence & rhythm of 3 or 4
        notes to serve as a repeating 'theme'. i also prefer to keep all the
        notes within about an octave of each other (ex: C to C or a few notes
        higher). one thing i've been making a more conscious effort of doing is
        having the melody 'rise' and 'fall' more naturally. in the past i've
        found myself making a melody that sort of jumps around and doesn't have
        an emotional peak. i read somewhere that a good rule is that once your
        melody hits its highest note it should descend and not hit that high
        note again. same thing for the 'fall' - hit the lowest note and start
        ascending again. i repeat some combination of this process until i have
        a handful of music 'snippets' i want to expand upon.
      </p>
      <figure className="dungeon-synth__figure">
        <img
          src="images/dungeon-synth/melody.png"
          alt="a short melody that rises and falls in the piano roll"
        />
        <figcaption>melody rise & fall</figcaption>
      </figure>
      <p className="dungeon-synth__content-block">
        next i start sewing ideas together. i find a couple ideas that sound
        like they could go together and try them out next to each other in my
        DAW. sometimes nothing really 'works' with another part, so i noodle
        around some more using the method outlined above until i find something
        that feels right. once i have a few sections that sort of flow together
        i start thinking about song structure. here's a quick explanation of how
        each section could be labeled: part A (verse), part B (chorus), and part
        C (bridge). there can totally be more parts. my latest album kept things
        simple though. using those same letters we could have a song that goes
        ABABCB, like many rock & pop songs do. but we don't have to be limited
        to that. in dungeon synth we could do anything: ABAB, ABCABC, ABC,
        ABCBA, ABBACC, etc. pretty much anything goes!
      </p>
      <p className="dungeon-synth__content-block">
        once i smash some sections together into a rough song structure i listen
        to it, paying special attention to the transition between each section
        (A =&gt; B, B =&gt; A, etc). more often than not the change between
        sections is a bit sudden or abrupt. i modify the notes, sort of through
        trial and error, to make things flow together better. some common tricks
        i use are removing one or more of the bass/low end notes from the final
        chord, moving the final chord up or down to more naturally lead us into
        the first chord of the next section, extending the final chord into the
        next section and fading it out, and switching up the ending notes of the
        melody to rise or fall in the direction of the first note of the next
        section.
      </p>
      <p className="dungeon-synth__content-block">
        one of the last things i do is add some background ornamentation. this
        is something i'm terrible at and have been working on. my last album had
        a few songs with quiet chords that faded in and faded out. it added some
        subtle movement to the music. adding some quick little runs of notes in
        the background that fade in & fade out is another thing i've been trying
        out - just quick little C D E F E D C sixteenth (1/16) notes, for
        instance.
      </p>
      <p className="dungeon-synth__content-block">
        i make my entire album in one Reaper file, which helps me bounce around
        from song to song while i'm writing. i've found that trying to brute
        force my way through one song, then the next, the next, etc takes away
        from the joy and wonder of the creative process. if i'm not having fun
        in the creating, then it's not worth doing. if the music is feeling
        stale i usually take a break for a couple weeks. when i come back to it
        everything sounds fresh again.
      </p>
    </>
  );
}
