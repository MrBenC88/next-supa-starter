import VStack from "@/components/VStack";

const StarterPage = () => {
  return (
    <>
      <VStack>
        <div>v stack item 1</div>
        <div>v stack item 2</div>
        <div>v stack item 3</div>
      </VStack>
      <div className="flex flex-row space-y-4">
        <div>h stack item 1</div>
        <div>h stack item 2</div>
        <div>h stack item 3</div>
      </div>
    </>
  );
};

export default StarterPage;
