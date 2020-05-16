class RebuildBlocksPositionsService
  def initialize(blocks)
    @blocks = blocks
  end
 
 
  def call
    Block.transaction do
      perform_blocks_positions
    end
  end
 
 
  private
 
 
  def perform_blocks_positions
    @blocks.each do |block|
      Block.find(block[:id]).update!(position: block[:position])
    end
  end
end