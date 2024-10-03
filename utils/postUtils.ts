const postUtils = {
  prepareTwitterPost: (data: any) => {
    const legacy = data.legacy
    const p = {
      media: '',
      favorite_count: legacy?.favorite_count || 0,
      retweet_count: legacy?.retweet_count || 0,
    }

    if(data.legacy?.entities){
      p.media = data.legacy.entities.media[0].media_url_https
    }

    return p
  }
}

export default postUtils
