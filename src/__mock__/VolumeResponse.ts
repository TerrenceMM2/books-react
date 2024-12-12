export const mockVolume = {
  id: "Uu3yCAAAQBAJ",
  title: "Coconut Cowboy",
  authors: ["Tim Dorsey"],
  publisher: "HarperCollins",
  description: "Channeling his inner Easy Rider, Serge Storms saddles up for his most epic, lethal, and hilarious road trip ever as he revvs off to find the lost American Dream . . . starting in the Florida Panhandle. Obsessed with the iconic Sixties classic Easy Rider, encyclopedic Floridaphile, lovable serial killer, and movie buff extraordinaire Serge A. Storms devises his wildest plan yet: finish the journey begun by his freewheeling heroes, Captain America and Billy, tragically cut short by some shotgun-wielding rednecks. Setting a course for the Florida panhandle, Captain Serge—with Coleman literally riding shotgun—mounts his classic motorcycle and hits the highway in search of the real America: the apple-pie-eating, freedom-swilling moms and pops of Main Street USA. But the America he finds in the rural burgs dotting the neck of the peninsula is a little bit different . . . and a whole lot weirder than anything Peter Fonda and Dennis Hopper encountered. In a state where criminal politicians are more common than gators, Serge and Coleman discover one particular speed-trap locale so aggressively inept at corruption that investigators are baffled where to start. Expect nothing less than madness, mayhem, ingenious homicides, and mind-altering pharmaceuticals when Serge and Coleman’s path intersects with the Sunshine State’s hyper-dysfunctional rusticity. Where’s Jack Nicholson when you need him?",
  imageLink: "http://books.google.com/books/content?id=Uu3yCAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  infoLink: "https://play.google.com/store/books/details?id=Uu3yCAAAQBAJ&source=gbs_api"
}

export const createMockVolumeList = () =>  Array(10).fill(mockVolume).map(() => ({ ...mockVolume }));