import { Box, VStack, Text, Image, Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb, useBoolean } from "@chakra-ui/react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const Index = () => {
  const [isPlaying, setIsPlaying] = useBoolean(false);
  const [currentSong, setCurrentSong] = useBoolean(0);
  const songs = [
    {
      title: "Summer Vibes",
      artist: "DJ Sunny",
      cover: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW1tZXIlMjB2aWJlcyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzEzNDE5NTAwfDA&ixlib=rb-4.0.3&q=80&w=1080",
      duration: 210, // in seconds
    },
    {
      title: "Chill Nights",
      artist: "Lofi Beats",
      cover: "https://images.unsplash.com/photo-1515940175183-6798529cb860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGlsbCUyMG5pZ2h0cyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzEzNDE5NTAxfDA&ixlib=rb-4.0.3&q=80&w=1080",
      duration: 180,
    },
    {
      title: "Dance Floor",
      artist: "Electro Mix",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkYW5jZSUyMGZsb29yJTIwYWxidW0lMjBjb3ZlcnxlbnwwfHx8fDE3MTM0MTk1MDF8MA&ixlib=rb-4.0.3&q=80&w=1080",
      duration: 240,
    },
  ];

  const handlePlayPause = () => {
    setIsPlaying.toggle();
  };

  const handleNext = () => {
    setCurrentSong((currentSong + 1) % songs.length);
  };

  const handlePrevious = () => {
    setCurrentSong((currentSong - 1 + songs.length) % songs.length);
  };

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Image boxSize="200px" src={songs[currentSong].cover} alt="Album cover" />
      <Text fontSize="2xl" fontWeight="bold">
        {songs[currentSong].title}
      </Text>
      <Text fontSize="md">{songs[currentSong].artist}</Text>
      <Box display="flex" alignItems="center">
        <Button onClick={handlePrevious} size="lg" variant="ghost">
          <FaBackward />
        </Button>
        <Button onClick={handlePlayPause} size="lg" variant="outline" colorScheme="teal">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </Button>
        <Button onClick={handleNext} size="lg" variant="ghost">
          <FaForward />
        </Button>
      </Box>
      <Slider aria-label="song-progress" defaultValue={30} min={0} max={songs[currentSong].duration} colorScheme="pink">
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </VStack>
  );
};

export default Index;
